const onAccumulate = (data: number[]): number  => {
    return (data || []).reduce((a, b) => a + b);
}


const Modules = {
    onAccumulate
}

export default Modules