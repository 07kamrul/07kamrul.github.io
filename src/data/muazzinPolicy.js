// Single source of truth for the Muazzin privacy policy.
// Rendered by ProjectDetail (React) and by scripts/build-muazzin.mjs (static /muazzin/ page).
// Strings may contain trusted inline HTML (strong, a, code, br); never put user input here.

export const muazzinMeta = {
  name: 'Muazzin - Qibla, Salah, Quran',
  packageId: 'com.anshintech.muazzin',
  effectiveDate: '19 October 2026',
  contactEmail: 'mdkamrulhasanewu@gmail.com',
  policyPath: 'muazzin/',
};

export const muazzinFeatures = [
  'Accurate prayer times and Azan alerts',
  'Qibla compass',
  'Nearest mosque finder with directions',
  'Ramadan schedule',
  'Quran, Hadith and dua library',
  'Works mostly offline, with no ads or analytics',
];

export const muazzinPolicy = [
  {
    id: 'introduction',
    title: '1. Introduction and scope',
    blocks: [
      { p: 'This policy explains what information <strong>Muazzin - Qibla, Salah, Quran</strong> ("the app", "Muazzin") collects, how it is used, and who it is shared with. The app is published by Kamrul ("I", "me", "developer") for Android under the package name <code>com.anshintech.muazzin</code>. It provides prayer times, Qibla direction, a nearest mosque finder, Azan alerts, a Ramadan schedule, Quran, Hadith and dua content.' },
      { p: 'Most features work on your device without an account. This policy applies only to the app, not to websites or apps run by third parties that the app connects to.' },
    ],
  },
  {
    id: 'information-collected',
    title: '2. Information collected',
    blocks: [
      { h3: 'Location (approximate and precise)' },
      { p: "If you allow location permission, the app reads your device's GPS location to calculate prayer times and Qibla direction, show nearby mosques and show local weather. The last known location is stored <strong>on your device</strong> so features work offline. If you deny permission, the app may estimate your approximate location from your IP address, or you can choose a place manually. Location is only used while you use the app; the app does not track you in the background." },
      { h3: 'Device sensors' },
      { p: 'The compass (magnetic sensor) is read on your device to point to the Qibla. This data is not sent anywhere.' },
      { h3: 'Account information (optional)' },
      { p: 'You can use the app as a guest. If you create an account to contribute mosque information (add a mosque, correct a location, suggest a Jamat time), I collect your <strong>email address</strong>, a password (stored hashed on the server), and the contributions you submit with their time and your user ID. A sign-in token is stored on your device to keep you signed in.' },
      { h3: 'Feedback and reports' },
      { p: 'If you send feedback through the in-app form, the text you type and any contact details you choose to include are sent to me. If you report a wrong mosque location, the report content and coordinates are submitted to OpenStreetMap as a public note.' },
      { h3: 'Information stored only on your device' },
      { p: 'Settings (language, theme, calculation method, notification choices, Azan sound), bookmarks, last-read Quran position, and cached prayer times and mosque lists are stored locally. I cannot see them. Uninstalling the app removes them.' },
      { h3: 'Information the app does not collect' },
      { p: 'The app does not use advertising, analytics or crash-reporting SDKs. It does not collect your contacts, photos, camera images, microphone audio, advertising ID, or payment information. The advertising ID permission is removed from the app.' },
    ],
  },
  {
    id: 'how-used',
    title: '3. How information is used',
    blocks: [
      {
        ul: [
          '<strong>Location:</strong> calculate prayer times and Qibla bearing, find nearby mosques, show weather and the Hijri date.',
          '<strong>Email and contributions:</strong> create and secure your account, review and publish community mosque data, notify you of approvals or rejections, and prevent spam or abuse.',
          '<strong>Feedback:</strong> respond to you and improve the app.',
          '<strong>Notifications and alarms:</strong> play Azan and reminders at the right time, including after a device restart.',
        ],
      },
      { p: 'I do not sell your personal information and do not use it for advertising or profiling.' },
    ],
  },
  {
    id: 'sharing',
    title: '4. Sharing and third parties',
    blocks: [
      { p: 'The app has no ad or analytics SDKs. To work, it sends requests to the services below. Depending on the feature, these requests may include your coordinates or IP address, so the provider receives them and handles them under its own privacy policy.' },
      {
        table: {
          head: ['Service', 'Type of party', 'Purpose / data sent'],
          rows: [
            ['<a href="https://osmfoundation.org/wiki/Privacy_Policy" rel="noopener">OpenStreetMap (map tiles, Nominatim, Overpass, Notes)</a>', 'Map and geodata provider', 'Map tiles, place names, nearby mosques; coordinates and IP address. Mosque error reports become public OSM notes.'],
            ['<a href="https://www.geoapify.com/privacy-policy/" rel="noopener">Geoapify</a>', 'Places data provider', 'Nearby mosque search; coordinates and IP address.'],
            ['<a href="https://photon.komoot.io/" rel="noopener">Photon (Komoot)</a>', 'Geocoding provider', 'Place search text.'],
            ['<a href="https://routing.openstreetmap.de/" rel="noopener">OpenStreetMap routing / OSRM</a>', 'Routing provider', 'Start and end coordinates for directions.'],
            ['<a href="https://aladhan.com/privacy-policy" rel="noopener">AlAdhan API</a>', 'Islamic data provider', 'Hijri date conversion (date only).'],
            ['<a href="https://islamic.network/privacy-policy/" rel="noopener">Islamic Network CDN</a>', 'Audio CDN', 'Quran recitation audio you choose to play; IP address.'],
            ['<a href="https://wttr.in/:help" rel="noopener">wttr.in</a> and <a href="http://www.7timer.info/" rel="noopener">7Timer</a>', 'Weather providers', 'Approximate coordinates to show weather.'],
            ['<a href="https://ipwho.is/" rel="noopener">ipwho.is</a>', 'IP geolocation provider', 'IP address, only when GPS is unavailable or denied.'],
            ['<a href="https://web3forms.com/privacy" rel="noopener">Web3Forms</a>', 'Form delivery provider', 'Feedback you submit.'],
            ['<a href="https://policies.google.com/privacy" rel="noopener">Google Play Services / Google Play</a>', 'Platform', 'App installation and in-app update checks.'],
          ],
        },
      },
      { p: 'My own server (used for optional accounts and community mosque data) is operated by me and is not shared with other parties beyond the hosting providers needed to run it. Public community contributions (mosque names, locations and Jamat times) are shown to all users without your email address. I may disclose information if required by law.' },
    ],
  },
  {
    id: 'retention',
    title: '5. Data retention and deletion',
    blocks: [
      {
        ul: [
          "Data stored on your device stays until you clear the app's data or uninstall it.",
          'Account data and contributions are kept while your account is active.',
          'Feedback messages are kept only as long as needed to respond and improve the app.',
        ],
      },
      { p: '<strong>To request deletion</strong> of your account and personal data, email <a href="mailto:mdkamrulhasanewu@gmail.com?subject=Delete%20my%20Muazzin%20data">mdkamrulhasanewu@gmail.com</a> from the address registered on your account, with the subject "Delete my Muazzin data". I will process requests within 30 days. Approved mosque information you contributed may stay in the community database without your name or email, since it is public data about mosques. Data already sent to third-party services or public OpenStreetMap notes is controlled by them.' },
    ],
  },
  {
    id: 'security',
    title: '6. Data security',
    blocks: [
      { p: 'Network requests use HTTPS where the provider supports it. Passwords are stored hashed, sign-in tokens are kept in app-private storage on your device, and the server limits request rates to reduce abuse. No method of transmission or storage is perfectly secure, so I cannot guarantee absolute security.' },
    ],
  },
  {
    id: 'children',
    title: "7. Children's privacy",
    blocks: [
      { p: 'The app is not directed at children under 13, and I do not knowingly collect personal information from them. Accounts are intended for users aged 13 and over. If you believe a child has given me personal information, email me and I will delete it.' },
    ],
  },
  {
    id: 'rights',
    title: '8. User rights and choices',
    blocks: [
      {
        ul: [
          '<strong>Permissions:</strong> you can turn location, notification, exact alarm and battery-optimisation permissions on or off at any time in Android Settings &gt; Apps &gt; Muazzin &gt; Permissions. Quran, Hadith and duas, and prayer times with a manually chosen location, still work without location access.',
          '<strong>Guest mode:</strong> you can use the app without creating an account.',
          '<strong>Access, correction, deletion:</strong> email me to see, correct or delete your account data.',
          "<strong>Notifications:</strong> each prayer, reminder and Hadith notification can be switched off in the app's Settings.",
        ],
      },
    ],
  },
  {
    id: 'changes',
    title: '9. Changes to this policy',
    blocks: [
      { p: "If the app's data practices change, I will update this page and the effective date above. Significant changes will also be announced in the app or on the Google Play listing. Continued use after an update means you accept the revised policy." },
    ],
  },
  {
    id: 'contact',
    title: '10. Contact',
    blocks: [
      { p: 'Kamrul, developer of Muazzin - Qibla, Salah, Quran<br>Email: <a href="mailto:mdkamrulhasanewu@gmail.com">mdkamrulhasanewu@gmail.com</a>' },
    ],
  },
];
