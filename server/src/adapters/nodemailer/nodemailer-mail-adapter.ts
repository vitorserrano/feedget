import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '1b08ae588d3aae',
    pass: 'f29b7915ed9e71',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Vitor Serrano <vitorcirinoserrano@gmail.com>',
      subject,
      html: body,
    })
  }
}
