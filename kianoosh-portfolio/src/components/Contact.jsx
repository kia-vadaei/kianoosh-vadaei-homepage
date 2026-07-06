import { useState } from 'react'
import {
  BriefcaseBusiness,
  Code2,
  Mail,
  SendHorizonal,
  Copy,
  MessageCircle,
  GraduationCap
} from 'lucide-react'
import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import Toast from './Toast'

import { profile } from '../data/profile'
import { buildMailTo } from '../utils/mail'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [toast, setToast] = useState(null)
  const reveal = useScrollReveal()

  function showToast(message, type = 'success') {
    setToast({ message, type })

    window.setTimeout(() => {
      setToast(null)
    }, 2800)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      showToast('Email copied to clipboard.', 'success')
    } catch {
      showToast('Could not copy email.', 'error')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    const message = formData.get('message')?.trim()

    if (!name || !email || !message) {
      showToast('Please fill in all fields.', 'error')
      return
    }

    const mailto = buildMailTo({
      to: profile.email,
      name,
      email,
      message
    })

    window.open(mailto, '_blank')
    event.currentTarget.reset()
    showToast('Email client opened.', 'success')
  }

  return (
    <section id="contact" className="section">
      <Toast toast={toast} />

      <div className="container">
        <SectionTitle eyebrow="Contact" title="Get In Touch" />

        <div className="contact__grid">
          <motion.div className="contact-methods" {...reveal}>
            <div className="contact-method glass-card">
              <Mail className="contact-method__icon" />
              <div>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button type="button" className="copy-email" onClick={copyEmail}>
                  <Copy size={14} />
                  Copy
                </button>
              </div>
            </div>

            <div className="contact-method glass-card">
              <BriefcaseBusiness className="contact-method__icon" />
              <div>
                <strong>LinkedIn</strong>
                <br />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/kianoosh-vadaei
                </a>
              </div>
            </div>

            <div className="contact-method glass-card">
              <GraduationCap className="contact-method__icon" />
              <div>
                <strong>Google Scholar</strong>
                <br />
                <a href={profile.scholar} target="_blank" rel="noopener noreferrer">
                  scholar.google.com/citations
                </a>
              </div>
            </div>


            <div className="contact-method glass-card">
              <Code2 className="contact-method__icon" />
              <div>
                <strong>GitHub</strong>
                <br />
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  github.com/kia-vadaei
                </a>
              </div>
            </div>

            <div className="contact-method glass-card">
              <MessageCircle className="contact-method__icon" />
              <div>
                <strong>Telegram</strong>
                <br />
                <a href={profile.telegram} target="_blank" rel="noopener noreferrer">
                  @kia_vadaei
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
          >
            <h3>Send a Message</h3>
            <p>
              This form opens your email client with a pre-filled message. No data is stored on
              this website.
            </p>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" name="message" className="form-textarea" required />
            </div>

            <button type="submit" className="btn">
              <SendHorizonal size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
