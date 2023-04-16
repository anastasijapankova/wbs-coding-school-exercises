export function Today() {

    const date = new Date();
    const dateString = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return <div>{dateString}</div>;
}

