export default function FloatingHearts() {

    return (
        <>
            {[...Array(20)].map((_,i)=>(
                <span
                key={i}
                className="heart"
                style={{
                    left:`${Math.random()*100}%`,
                    animationDelay:`${Math.random()*6}s`,
                    fontSize:`${20+Math.random()*30}px`
                }}
                >
                    ❤️
                </span>
            ))}
        </>
    );

}