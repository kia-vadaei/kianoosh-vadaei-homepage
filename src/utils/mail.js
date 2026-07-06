export function buildMailTo({ to, name, email, message }) {
  const subject = `Contact from ${name}`
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
