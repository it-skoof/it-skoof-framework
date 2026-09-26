import { useRef } from "react";


export const useCardMove = () => {
    const ref = useRef(null)
    const per = (e) => {
        const card = ref.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // От -1 до 1 относительно центра карточки
        const percentX = (x / rect.width) * 2 - 1;
        const percentY = (y / rect.height) * 2 - 1;

        const maxTilt = 10;

        const rotateX = -percentY * maxTilt;
        const rotateY = percentX * maxTilt;

        card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;
    };
    const retu = () => {
        if (!ref.current) return;

        ref.current.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        `;
    };
  
  return {ref, per, retu}
}
