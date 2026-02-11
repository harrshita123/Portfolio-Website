import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Prevent caching so every visit counts

export async function GET() {
    try {
        const response = await fetch('https://api.counterapi.dev/v1/harshita-yadav-portfolio/visits/up', {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch from counter service');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Counter API Error:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
