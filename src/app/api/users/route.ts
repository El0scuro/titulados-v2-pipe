// app/api/token/route.ts
import { NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import jwt_decode from 'jwt-decode';

export async function GET() {
  const session = await auth0.getSession();

  if (!session || !session.tokenSet?.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Decodifica el accessToken (o idToken)
  const decoded: Record<string, any> = jwt_decode(session.tokenSet.accessToken as string);

  // Obtén el rol del custom claim
  const rol = decoded['https://uv.cl/rol'] as string | undefined;

  console.log('Rol desde token en route:', rol);

  return NextResponse.json({
    accessToken: session.tokenSet.accessToken,
    rol, // Devuelve el rol al front
  });
}
