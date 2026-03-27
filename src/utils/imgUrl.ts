export default function getImgUrl(url: string): string {
    return new URL(url, import.meta.url).href;
}
