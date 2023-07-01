import { SendEmailCommand, SendEmailCommandInput } from '@aws-sdk/client-ses';
import { SESClient } from '../ServiceProviders/AWS';

function sendEmailBankerLead(params: ISendEmailBankerLeadParams): Promise<IDefaultEMailResponse> {
  const { bankerEMail, bankerName } = params;

  return new Promise<IDefaultEMailResponse>(async (res, rej) => {
    const eMailParams = {
      Destination: {
        ToAddresses: [bankerEMail],
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Olá ${bankerName}, \nSeja bem vindo ao Kanal Open Finance. 🚀 Como estamos com alta demanda neste momento entraremos em contato em alguns dias, mas fique tranquilo, pois já recebemos seu cadastro e armazenamos em nosso banco de dados :D \n\n`,
            // EU prefiro esse -> Data: `Coé doido, a quebrada recebeu seu contatinho. Logo logo nóis desenrola, podpá? \n\n`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Kanal - Confirmação de cadastro',
        },
      },
      Source: process.env.MAIL_DEFAULT_SENDER,
    };

    try {
      const data = await SESClient.send(new SendEmailCommand(eMailParams));
      // console.log('Email enviado com sucesso!', data);
      return res({ status: 'OK' });
    } catch (err) {
      console.log(`\nSES Error trying to send email to: ${bankerEMail}`);
      console.log(err);
      return rej({ status: 'Error ao enviar email \n' + JSON.stringify(err) });
    }
  });
}
function sendEmailTest(emailTemplate: string, destEmail?: string): Promise<IDefaultEMailResponse> {
  if (!destEmail) destEmail = '73s73@mailinator.com';

  const emails = (destEmail + ';').split(';').filter((i) => i);

  return new Promise<IDefaultEMailResponse>(async (res, rej) => {
    const eMailParams: SendEmailCommandInput = {
      Destination: {
        ToAddresses: emails,
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailTemplate,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Teste envio Email',
        },
      },
      Source: 'guilherme.kalel@kanal.com.br',
    };

    try {
      const data = await SESClient.send(new SendEmailCommand(eMailParams));
      // console.log('Email enviado com sucesso!', data);
      return res({ status: 'OK' });
    } catch (err) {
      console.log(`\nSES Error trying to send test email`);
      console.log(err);
      return rej({ status: 'Error ao enviar email \n ' + JSON.stringify(err) });
    }
  });
}

const EMailServices: IEMailServices = {
  sendEmailBankerLead,
  sendEmailTest,
};

export default EMailServices;
