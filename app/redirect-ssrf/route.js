export async function GET(request) {
  const target = request.nextUrl.searchParams.get('target')
  if (!target) {
    return Response.json(
      { error: 'Missing target parameter. Example: ?target=http://example.com' },
      { status: 400 }
    )
  }
  return Response.redirect(target, 302)
}
