export const onAccumulate = (data: number[]): number  => {
    return (data || []).reduce((a, b) => a + b);
}