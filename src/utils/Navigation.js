export function BreadcrumbItem(url = '', name) {
  if (url === '') {
    return { url: `/`, name: name }
  }
  return { url: `/${url}/`, name: name }
}
