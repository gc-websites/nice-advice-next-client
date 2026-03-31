import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Nice Advice',
};

export default function PrivacyPolicy() {
  return (
    <div className="container section__padding flex flex-col gap-8">
      <h2 className="section__title text-3xl text-center">Privacy Policy</h2>
      <p className="section__description">
        This Privacy Policy was last revised and shall become effective as of
        April 1, 2022. BY ACCESSING THE SITE, YOU HAVE READ AND AGREE TO THE
        TERMS AND CONDITIONS OF THIS PRIVACY POLICY IN ITS ENTIRETY.
      </p>
      <ul className="section__description list-disc flex flex-col gap-4 pl-5">
        <li>
          If you opt in to our newsletter(s), we’ll send you emails and other
          stuff that may be of interest to you. You can unsubscribe from our
          marketing emails at any time.
        </li>
        <li>
          We collect Personal Data, Site Data, and Anonymous Data (as defined
          below) to make our website(s) more useful to you.
        </li>
        <li>
          If we do collect Personal Data (as defined below), we will only use
          this information for lawful purposes and will store and retain this
          information for as long as required by applicable law.
        </li>
        <li>
          You can contact us at any time to update or remove any Personal Data
          that we have collected and stored about you.
        </li>
      </ul>
      <p className="section__description">
        Thank you for visiting niceadvice.com (the “Site”). The Site is an
        Internet property of Nice Advice and its affiliated
        companies (“Nice Advice”, “our”, “we” or “us”). Nice Advice is committed to
        protecting your privacy. We have prepared this privacy policy (“Privacy
        Policy”) to describe to you and to outline our practices and policies
        associated with any information (such as Site Data, Anonymous Data, and
        Personal Data, each as defined below) that we may collect from you, or
        that you may share with us when you access or use the Site or use any
        related products and/or services.
      </p>
      <h3 className="section__title text-2xl">Lawful Basis for Processing Data</h3>
      <p className="section__description">
        In certain jurisdictions, the processing of your Personal Data (as
        defined below) is lawful only if it is permitted under data protection
        legislation. In this case, we have a lawful basis for each of our
        processing activities (unless an exemption applies) as outlined below:
      </p>
      <ul className="section__description list-disc flex flex-col gap-4 pl-5">
        <li>
          Consent. By using the Site, or otherwise submitting your Personal Data
          to us, you consent to our collection, use and sharing of your
          information as described in this Privacy Policy.
        </li>
        <li>
          Legitimate Interest. We will process your Personal Data based on
          Legitimate Interest, and particularly where it is used for marketing
          and business purposes, and to contact you to start a conversation
          regarding your use of the Site or any Nice Advice newsletters that you
          wish to join.
        </li>
        <li>
          Legal Obligation. We may also process your Personal Data based on
          other lawful basis such as where the processing is necessary to comply
          with applicable law.
        </li>
      </ul>
      <h3 className="section__title text-2xl">
        How We Collect and Use Personal and Anonymous Data
      </h3>
      <p className="section__description">
        When you access the Site, register for any associated products and/or
        services, or opt-in to receive newsletters and other communications from
        us, we may collect Personal Data and Anonymous Data from you. We may
        also collect Personal Data and Anonymous Data when you send us
        information or communications. “Personal Data” means data that allows
        someone to identify or contact you, including, for example, and without
        limitation, your name, phone number, physical address, Internet Protocol
        (IP) address, and email address when you access the Site or any
        associated products and/or services. “Anonymous Data” refers to data
        about you that is not associated with or linked to your Personal Data.
        Anonymous Data does not permit the identification of individual persons.
        To make the Site more useful to you, our servers (which may be hosted by
        a third-party service provider) may collect Personal Data or Anonymous
        Data from you such as browser type, operating system, Internet Protocol
        (IP) address, domain name, Site usage and statistics, and/or a date/time
        stamp of your visit to the Site. We may also use cookies and
        navigational data like Uniform Resource Locators (URL) and referring
        URLs to gather information regarding the date and time of your visit. We
        may also use Personal Data and Anonymous Data for market research
        purposes and to improve our services and the Site. We may share
        Anonymous Data with selected third parties and business partners,
        however, we will not share any Anonymous Data if such information is,
        contains, or will be linked to your Personal Data, unless we have given
        you notice, as described in this Privacy Policy, and you have given us
        authorization to do so. Nice Advice will use Personal Data and IP addresses
        to identify users of the Site if and when we feel it is necessary to
        enforce compliance with the Site’s policies or to protect our services,
        the Site, or other users of the Site and/or services.
      </p>
      <h3 className="section__title text-2xl">Security of Data</h3>
      <p className="section__description">
        Nice Advice is committed to protecting the security of any Personal Data
        that is collected by Nice Advice. We use a variety of industry-standard
        security technologies and procedures to help protect any Personal Data
        from unauthorized access, use, or disclosure. Despite these measures, no
        method of transmission over the Internet, or method of electronic
        storage is 100% secure. Nice Advice cannot fully eliminate security risks
        associated with the collection and storage of any Personal Data,
        including without limitation, any mistakes and security breaches that
        may happen. While we strive to use commercially acceptable means to
        protect your Personal Data, we cannot guarantee its absolute security.
        In the unlikely event of a data breach where your Personal Data has been
        compromised, Nice Advice will promptly notify you, the applicable
        authorities and supervisory authorities or data protection authorities.
        If you are located in the EU/EEA and Nice Advice is required to transfer
        your Personal Data in accordance with this Privacy Policy, we exert
        commercially reasonable efforts to ensure that any transfer of your
        Personal Data outside of the EU/EEA is protected under industry-standard
        contractual clauses and any subsequent data protection safeguards.
      </p>
      <h3 className="section__title text-2xl">Cookies and Third-Party Advertising</h3>
      <p className="section__description">
        We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our Site. These companies use cookies to serve ads based on your prior visits to our Site or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
      </p>
      
      <h3 className="section__title text-2xl">Changes to This Privacy Policy</h3>
      <p className="section__description">
        We reserve the right, in our sole discretion, to modify, update and
        change this Privacy Policy from time to time without prior notice to
        you. Notice regarding any Privacy Policy changes will be placed in a
        prominent location on the Site and will take effect immediately upon
        posting on the Site. Please check the Site periodically for any changes.
        Your continued use of the Site following the posting of changes to this
        Privacy Policy will constitute your acknowledgment and acceptance of any
        and all changes.
      </p>
      <h3 className="section__title text-2xl">Affiliate Disclosure</h3>
      <p className="section__description">
        Nice-advice.info participates in various affiliate marketing programs, including the Amazon Services LLC Associates Program. This means we may earn a commission when you click on or make purchases via affiliate links (including but not limited to Amazon.com and external educational institutions like CIM), at no additional cost to you.
      </p>
    </div>
  );
}
