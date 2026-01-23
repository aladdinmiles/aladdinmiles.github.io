import { NextResponse } from 'next/server';
import { Algorithm, sign } from 'jws';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const header = {
      alg: 'ES256' as Algorithm,
      kid: 'Y3G9J4PFC7',
      typ: 'JWT'
    };

    const payload = {
      iss: '57783ff1-c29b-4aa3-889a-9aff5c5551d5',
      aud: 'appstoreconnect-v1',
      iat: Date.now() / 1000,
      exp: Date.now() / 1000 + 1200,
      scope: [
        'GET /v1/apps/1503894088/appInfos',
        'GET /v1/apps?filter[platform]=IOS'
      ]
    };
    const file = await fs.readFile(
      path.join(process.cwd(), 'src/app/apple-jwt/AuthKey_Y3G9J4PFC7.p8')
    );

    const jwt = sign({ header, payload, privateKey: file });

    return NextResponse.json({ jwt });
  } catch (error) {
    // Log sanitized error information
    console.error(
      'JWT generation failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    // Return generic error message without exposing internals
    return NextResponse.json(
      { error: 'Failed to generate authentication token' },
      { status: 500 }
    );
  }
}
