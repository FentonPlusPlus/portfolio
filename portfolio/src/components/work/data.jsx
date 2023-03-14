import Sjardin from '../../assets/photos/sjardin-screenshot.png';
import PetBrB from '../../assets/photos/PetBrB_screenshot.png';
import TheatreRoyal from '../../assets/photos/theatre-royal-screenshot.png';

export const projectsData = [
    {
        id: 1,
        image: Sjardin,
        title: 'Sjardin 1.0 (in development)',
        category: 'web',
        description: 'A collaborative app for coders that helps them come together to build, study or pair',
        href: 'https://github.com/FentonPlusPlus/soc-project-week-sjardin-frontend'
    },
    {
        id: 2,
        image: TheatreRoyal,
        title: 'The Theatre Royal Booking System',
        category: 'software',
        description: 'A theatre booking system that allows users to book tickets for shows',
        href: 'https://github.com/FentonPlusPlus/the-theatre-royal'
    },
    {
        id: 3,
        image: PetBrB,
        title: "Pet'BrB",
        category: 'web',
        description: 'A pet care service app that allows users to find sitters for their pets',
        href: 'https://github.com/SchoolOfCode/bc13_final-project_front-end-refactor'
    }
]

export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'web'
    },
    {
        name: 'software'
    }
]