import Pioner from '@/assets/pioner.png';
import PionerСhannels from '@/assets/pioner2.png';
import Master from '@/assets/master.png';
import MasterСhannels from '@/assets/master2.png';
import Lider from '@/assets/lider.png';
import LiderСhannels from '@/assets/lider2.png';
import Premier from '@/assets/premier.png';
import PremierСhannels from '@/assets/premier2.png';
import Doppaket from '@/assets/doppaketi.png';
import DoppaketiChannels from '@/assets/doppak2.png';
import NarPremier from '@/assets/narpremier.png';
import Multiroom from '@/assets/multiroom.png';
export const useRates = () => {
        const rates = [
        {
            id: 'pioner',
            img: Pioner,
            imgСhannels: PionerСhannels,
            title: 'Тариф Пионер',
        },
        {
            id: 'master',
            img: Master,
            imgСhannels: MasterСhannels,
            title: 'Тариф Мастер',
        },
        {
            id: 'lider',
            img: Lider,
            imgСhannels: LiderСhannels,
            title: 'Тариф Лидер',
        },
        {
            id: 'premier',
            img: Premier,
            imgСhannels: PremierСhannels,
            title: 'Тариф Премьер',
        },
        {
            id: 'premierasd',
            img: NarPremier,
            imgСhannels: PremierСhannels,
            title: 'Народный премьер',
        },
        {
            id: 'multiroom',
            img: Multiroom,
            title: 'Мультирум',
        },
        {
            id: 'doppaketi',
            img: Doppaket,
            imgСhannels: DoppaketiChannels,
            title: 'Дополнительные пакеты',
        }
    ];
    return {rates};
}