import Pioner from '@/assets/pioner.png';
import Master from '@/assets/master.png';
import Lider from '@/assets/lider.png';
import Premier from '@/assets/premier.png';

export const useRates = () => {
        const rates = [
        {
            id: 'pioner',
            img: Pioner,
            title: 'Тариф Пионер',
        },
        {
            id: 'master',
            img: Master,
            title: 'Тариф Мастер',
        },
        {
            id: 'lider',
            img: Lider,
            title: 'Тариф Лидер',
        },
        {
            id: 'premier',
            img: Premier,
            title: 'Тариф Премьер',
        },
        {
            id: 'premierasd',
            img: Premier,
            title: 'Народный премьер',
        },
        {
            id: 'multiroom',
            img: Lider,
            title: 'Мультирум',
        },
        {
            id: 'doppaketi',
            img: Master,
            title: 'Доп пакеты',
        }
    ];
    return {rates};
}