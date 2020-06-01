<template>
  <div class="terms">
    <h1 class="terms--title">Terms of Service</h1>
    <div class="terms__body">
      <h2 class="terms__body--subtitle">Quickcard Terms of Service</h2>
      <span class="terms__body--last-update">Last updated 03/27/2020</span>

      <p>
        <strong>AGREEMENT TO TERMS</strong> <br />
        These Terms of Service constitute a legally binding agreement made
        between you, whether personally or on behalf of an entity (“you”) and
        [business entity name] (“we,” “us” or “our”), concerning your access to
        and use of the [website name.com] website as well as any other media
        form, media channel, mobile website or mobile application related,
        linked, or otherwise connected thereto (collectively, the “Site”).
      </p>
      <p>
        You agree that by accessing the Site, you have read, understood, and
        agree to be bound by all of these Terms of Service. If you do not agree
        with all of these Terms of Service, then you are expressly prohibited
        from using the Site and you must discontinue use immediately.
      </p>
      <p>
        You agree that by accessing the Site, you have read, understood, and
        agree to be bound by all of these Terms of Service. If you do not agree
        with all of these Terms of Service, then you are expressly prohibited
        from using the Site and you must discontinue use immediately.
      </p>
      <p>
        Supplemental Terms of Service or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Terms of Service at any time and for any
        reason.
      </p>
      <p>
        We will alert you about any changes by updating the “Last updated” date
        of these Terms of Service, and you waive any right to receive specific
        notice of each such change.
      </p>
      <p>
        It is your responsibility to periodically review these Terms of Service
        to stay informed of updates. You will be subject to, and will be deemed
        to have been made aware of and to have accepted, the changes in any
        revised Terms of Service by your continued use of the Site after the
        date such revised Terms of Service are posted.
      </p>
      <p>
        The information provided on the Site is not intended for distribution to
        or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which
        would subject us to any registration requirement within such
        jurisdiction or country.
      </p>
      <p>
        Accordingly, those persons who choose to access the Site from other
        locations do so on their own initiative and are solely responsible for
        compliance with local laws, if and to the extent local laws are
        applicable.
      </p>
      <p>
        <strong>Option 1:</strong> The Site is intended for users who are at
        least 18 years old. Persons under the age of 18 are not permitted to
        register for the Site.
      </p>
      <p>
        <strong>Option 2:</strong> [The Site is intended for users who are at
        least 13 years of age.] All users who are minors in the jurisdiction in
        which they reside (generally under the age of 18) must have the
        permission of, and be directly supervised by, their parent or guardian
        to use the Site. If you are a minor, you must have your parent or
        guardian read and agree to these Terms of Service prior to you using the
        Site.
      </p>

      <p>
        <strong>INTELLECTUAL PROPERTY RIGHTS</strong> <br />
        Unless otherwise indicated, the Site is our proprietary property and all
        source code, databases, functionality, software, website designs, audio,
        video, text, photographs, and graphics on the Site (collectively, the
        “Content”) and the trademarks, service marks, and logos contained
        therein (the “Marks”) are owned or controlled by us or licensed to us,
        and are protected by copyright and trademark laws and various other
        intellectual property rights and unfair competition laws of the United
        States, foreign jurisdictions, and international conventions.
      </p>
      <p>
        The Content and the Marks are provided on the Site “AS IS” for your
        information and personal use only. Except as expressly provided in these
        Terms of Service, no part of the Site and no Content or Marks may be
        copied, reproduced, aggregated, republished, uploaded, posted, publicly
        displayed, encoded, translated, transmitted, distributed, sold,
        licensed, or otherwise exploited for any commercial purpose whatsoever,
        without our express prior written permission.
      </p>
      <p>
        Provided that you are eligible to use the Site, you are granted a
        limited license to access and use the Site and to download or print a
        copy of any portion of the Content to which you have properly gained
        access solely for your personal, non-commercial use. We reserve all
        rights not expressly granted to you in and to the Site, the Content and
        the Marks.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terms"
};
</script>

<style lang="scss" scoped>
.terms {
  width: 100%;
  padding-right: 15px;

  &--title {
    font-size: $title;
    color: $orange;
    font-weight: 600;
    letter-spacing: 0.48px;
    line-height: 1.33;
    font-stretch: normal;
    font-style: normal;
    margin-bottom: 24px;
    border-bottom: 2px solid #eeeeee;
    padding-bottom: 20px;
  }

  &__body {
    &--subtitle {
      font-size: 20px;
      color: $dark-gray;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &--last-update {
      font-size: $text;
      color: $orange;
      font-weight: 700;
      margin-bottom: 24px;
      display: block;
    }

    p {
      strong {
        font-weight: 700;
      }

      font-size: $text;
      color: $dark-gray;
      line-height: 30px;
      letter-spacing: 0.26px;
      margin-bottom: 16px;
    }
  }
}
</style>
