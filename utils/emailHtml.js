// Email HTML body
export function html({ url, host, email }) {
    // Insert invisible space into domains and email address to prevent both the
    // email address and the domain from being turned into a hyperlink by email
    // clients like Outlook and Apple mail, as this is confusing because it seems
    // like they are supposed to click on their email address to sign in.
    const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
    const escapedHost = `${host.replace(/\./g, "&#8203;.")}`
  
    // Some simple styling options
    const backgroundColor = "#f9f9f9"
    const textColor = "#444444"
    const mainBackgroundColor = "#ffffff"
    const buttonBackgroundColor = "#346df1"
    const buttonBorderColor = "#346df1"
    const buttonTextColor = "#ffffff"
  
    return `
    <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
    
    <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the TODO NEXT-AUTH channel.</h2>
    
    <h3 style="text-align: center; text-transform: uppercase;">${escapedHost}</h3>
    
    <p>Congratulations! You're almost set to start using BlogDEV.
      Sign in as <strong>${escapedEmail}</strong>.
    </p>
    
    <a href=${url} target="_blank" style="background: crimson; text-decoration: none; color: white; padding: 1rem 3rem; margin: 10px 0; display: inline-block;">Sign in with Email</a>
    <p>If the button doesn't work for any reason, you can also click on the link below:</p>
    <div>${url}</div>
    </div>
  `
  }
  
  // Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
  export function text({ url, host }) {
    return `Sign in to ${host}\n${url}\n\n`
  }