'use client'
import Image from "next/image";
import { allCocktails } from "../_components/constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalCocktails = allCocktails.length;
    const goToSLide = (index: number) => {
        const newIndex = (index + totalCocktails) % totalCocktails
        setCurrentIndex(newIndex)
    }
    const getCocktailAt = (indexOffset: number) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktailAt(0)
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)

    useGSAP(() =>{
        gsap.fromTo('#title', {
            opacity: 0
        }, {
            opacity: 1, duration: 1
        })
        gsap.fromTo('.cocktail .img', {
            opacity: 0,
            xPercent: -100
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 100,
            ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', {
            yPercent: 100,
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 100,
            ease: 'power1.inOut'
        })
    }, [currentIndex])


    return (
        <section id="menu" aria-labelledby="menu-heading">
            <Image src={'/images/slider-left-leaf.png'} alt="left-leaf" id="m-left-leaf" width={100} height={100} />
            <Image src={'/images/slider-right-leaf.png'} alt="right-leaf" id="m-right-leaf" width={100} height={100} />

            <h2 className="sr-only" id="menu-heading">Cocktail Menu</h2>
            <nav className="cocktail-tabs" aria-labelledby="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button key={cocktail.id}
                            className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                            onClick={() => goToSLide(index)}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSLide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <Image src={'/images/right-arrow.png'} alt="right-arrow" aria-hidden='true' width={20} height={20} />
                    </button>
                    <button className="text-left" onClick={() => goToSLide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <Image src={'/images/left-arrow.png'} alt="left-arrow" aria-hidden='true' width={20} height={20} />
                    </button>
                </div>

                <div className="cocktail">
                    <div className="img-wrapper">
                        <Image
                            src={currentCocktail.image}
                            alt="current-cocktail"
                            className="img"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>

                <div className="recipe">
                    <div className="info" ref={contentRef} >
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Menu;