'use client';

export default function InteractiveBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Base rough noise - rock texture */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='roughNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='6' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23roughNoise)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                }}
            />

            {/* Brushed metal horizontal lines */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        rgba(255, 255, 255, 0) 0px,
                        rgba(255, 255, 255, 0.1) 1px,
                        rgba(255, 255, 255, 0) 2px,
                        rgba(255, 255, 255, 0) 4px
                    )`,
                    mixBlendMode: 'soft-light',
                }}
            />

            {/* Scratches and imperfections */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='scratches'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.05' numOctaves='2' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0 1 0 0 0 0'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23scratches)' fill='white'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay',
                }}
            />

            {/* Coarse grain - matte finish */}
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='coarseGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' seed='10'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23coarseGrain)'/%3E%3C/svg%3E")`,
                    backgroundSize: '150px 150px',
                }}
            />

            {/* Metallic gradient highlights */}
            <div className="absolute inset-0">
                {/* Top-left metallic shine */}
                <div
                    className="absolute top-0 left-0 w-1/2 h-1/2"
                    style={{
                        background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
                    }}
                />

                {/* Bottom-right darker area */}
                <div
                    className="absolute bottom-0 right-0 w-1/2 h-1/2"
                    style={{
                        background: 'radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.25) 0%, transparent 50%)',
                    }}
                />

                {/* Cyan metallic tint */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.06) 0%, transparent 60%)',
                    }}
                />
            </div>

            {/* Anisotropic reflection lines (metallic effect) */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        90deg,
                        transparent 0px,
                        rgba(255, 255, 255, 0.2) 1px,
                        transparent 2px,
                        transparent 60px
                    )`,
                }}
            />

            {/* Dark vignette for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
                }}
            />
        </div>
    );
}
