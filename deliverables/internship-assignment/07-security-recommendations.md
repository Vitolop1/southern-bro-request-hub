# Southern Bro Enterprises Security and Website Reliability Recommendations

## 1. Objective

Strengthen website reliability, reduce outage risk, and improve basic security while company systems are being restored and budgets remain limited.

## 2. Key Risks to Address

- website downtime or unreliable hosting
- missing SSL or weak visitor trust signals
- lack of backup copies
- no monitoring when the site goes offline
- form submissions being lost during outages
- too many accounts created without documentation

## 3. Recommended Security Stack

### Layer 1: DNS, SSL, and Basic Protection

Use Cloudflare in front of the public website for:

- SSL / HTTPS support
- DNS management
- caching and performance
- basic traffic protection
- reduced downtime risk

### Layer 2: Backups

Use one of the following:

- managed website backups if using WordPress or a managed website host
- regular export copies of website content
- spreadsheet or CRM backup of all form submissions
- off-platform backup copies of key business files

### Layer 3: Monitoring

Use basic monitoring so management knows when the site is down.

Possible options:

- Cloudflare services
- host-provided uptime tools
- AWS or DigitalOcean monitoring only if the stack later becomes more technical

## 4. Recommended Low-Cost Recovery Approach

### Immediate Phase

1. Put the website behind Cloudflare.
2. Confirm SSL is active on the main domain.
3. Use HubSpot or backup forms so inquiries are not lost.
4. Export key website content regularly.
5. Keep a temporary backup contact page or static status page available.

### Next Phase

1. Add automated backups.
2. Add uptime alerts.
3. Add role-based access control for staff accounts.
4. Review plugin, app, and third-party account access.

## 5. Reliability Recommendation by Platform

### If Rebuilding Fast

- Use the simplest platform that can publish quickly.
- Put Cloudflare in front of it.
- Keep forms connected to HubSpot.

### If Building for Long-Term Growth

- Use WordPress or another CMS with good backup support.
- Add scheduled backups and monitoring from day one.
- Document all admin access and plugins.

## 6. Backup Recommendations

- weekly full site backup at minimum
- backup before major website edits
- export contacts and leads from HubSpot on a regular schedule
- store backup instructions where management can access them
- test at least one restore process after the site is live

## 7. Access and Account Controls

- create shared ownership documentation for all accounts
- use strong unique passwords
- enable two-factor authentication where available
- remove access when a tool is no longer needed
- record every free trial account in the account register

## 8. Temporary Outage Recommendation

If the main website remains unstable, create a temporary public status page or lightweight backup website that includes:

- company overview
- active services
- phone number
- contact email
- quote request link

This ensures the business can still receive customer inquiries during outages.

## 9. Final Recommendation

The most realistic short-term security plan is not an expensive enterprise rebuild. It is a clean, documented setup with SSL, Cloudflare protection, consistent backups, lead capture redundancy, and clear account ownership. That approach gives Southern Bro Enterprises the best balance of stability, affordability, and fast recovery.

## 10. Sources

- Cloudflare pricing: https://www.cloudflare.com/plans/
- Cloudflare SSL docs: https://developers.cloudflare.com/ssl/
- AWS Route 53 pricing: https://aws.amazon.com/route53/pricing/
- DigitalOcean backups: https://www.digitalocean.com/pricing/backups
- DigitalOcean monitoring: https://docs.digitalocean.com/products/monitoring/
- GitHub Pages docs: https://docs.github.com/en/pages
