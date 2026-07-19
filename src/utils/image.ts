// Pide a Cloudinary una versión chica de la imagen (ya subida a tamaño completo)
// en vez de servir el archivo entero donde solo se muestra una miniatura.
// URLs que no son de Cloudinary (o vacías) pasan sin cambios.
export function imgThumbUrl(url: string | null | undefined, width = 150): string {
  if (!url) return '';
  if (!url.includes('/image/upload/')) return url;
  return url.replace('/image/upload/', `/image/upload/w_${width},c_limit,f_auto,q_auto/`);
}
