export const stripHtmlTags = (str : string) => {
    if(!str) return null;
    
    return str.replace(/<[^>]*>/g, '');
}