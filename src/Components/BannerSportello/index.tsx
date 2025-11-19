import React from 'react';
import { Button } from '../Ui/Button';
import { href } from 'react-router-dom';

const BannerSportello: React.FC = () => {
    return (
        <>
            <div className="w-full h-[300px] bg-[#90b791] flex flex-col gap-4 items-center justify-center text-grey-900 text-center shadow-lg">
                <h2 className="text-4xl font-bold m-0 tracking-wide">
                    SPORTELLO PSICOLOGICO GRATUITO
                </h2>
                <div>
                <Button onClick={() => window.location.href = "/sportello-psicologico"} text="Scopri di più" />
                 </div>
            </div>
            
        </>
    );
};

export default BannerSportello;
