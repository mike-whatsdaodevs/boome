import { FC, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import styles from '@/styles/Home.module.css'
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
interface IProps {
    id: string
    className: any

}
const Index: FC<IProps> = (props) => {
    const { id, className } = props
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };
    const options: ISourceOptions = useMemo(() => (
        {

            fullScreen: {
                enable: false,
                zIndex: 0
            },
            particles: {
                color: {
                    value: ['#fff', '#7f8fe9'],
                },


                move: {
                    direction: "none",
                    enable: true,
                    outModes: 'out',
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: { 
                    // density: {
                    //     enable: true,
                    //     area: 500,
                    // },
                    value: 20,
                },
                opacity: {
                    value: 0.5,
                    random:true,
                    animation: {
                        speed: 3,
                        minimumValue: 0.1
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 2.5 },
                },
            },


        }
    ), [])

    if (init) {
        return (
            <Particles
                className={className}
                id={id}
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};
export default Index