import React from 'react';
import { Button } from '../Ui/Button';

const BannerSportello: React.FC = () => {
    return (
        <>
            <div className="w-full h-[300px] bg-white flex flex-col gap-5 items-center justify-center text-center shadow-lg px-6">
                <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#14532d", margin: 0 }}>
                    Centro di supporto psicologico
                </h2>
                <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#4b7c5a", maxWidth: 900, margin: "0 auto", lineHeight: 1.8 }}>
                    Uno spazio rivolto a tutte le persone che sentono la necessità di elaborare e condividere pensieri ed emozioni rispetto alla crisi climatica.
                </p>
                <div>
                <Button onClick={() => window.location.href = "/sportello-psicologico"} text="Scopri di più" />
                 </div>
            </div>
            
        </>
    );
};

export default BannerSportello;
