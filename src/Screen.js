import rock from './image/rock.jpg';
import scissors from './image/scissors.jpg';
import paper from './image/paper.jpg';

const img = [rock, scissors, paper];
const alt = "alt"
export default function Screen({num=1}) {
    const src = img[num-1]
    return (
        <img src={src} alt={alt} />
    );
}