export function Greeting() {
    const timeNow = new Date().getHours();
    let greeting;

    if (timeNow < 12) {
        greeting = 'Good morning';
    } else if (timeNow < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return <div>{greeting}</div>;
}