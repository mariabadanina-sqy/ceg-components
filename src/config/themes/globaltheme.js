const theme = {
  brand01: '#00338D',
  brand02: '#002D91',
  ink: '#333',
  paper: '#ffffff',
};

module.exports = {
  // You probably never want edit this id.
  id: 'global-theme',

  fontFamily: {
    fontFamilies: {
      primary: 'Hoves',
      secondary: 'PT Serif, serif',
    },
  },

  color: {
    colors: {
      brand01: { value: theme.brand01 },
      brand02: { value: theme.brand02 },

      inverse01: { value: theme.paper },
      inverse02: { value: theme.brand01 },
      inverse02Alt: { value: theme.brand01 },

      link01: { value: '#00338D' },
      link01Hover: { value: '#5C7DB6' },
      link01Pressed: { value: '#6294E9' },
      link01Focus: { value: '#6294E9' },

      link02: { value: '#333333' },
      link02Hover: { value: '#00338D' },
      link02Pressed: { value: '#666666' },
      link02Focus: { value: '#666666' },

      interactive01: { value: '#00338D' },
      interactive01Hover: { value: '#333333' },
      interactive01Pressed: { value: '#232323' },
      interactive01Focus: { value: '#EB7974' },
      textOnInteractive01: { value: '#ffffff' },
      textOnInteractive01Hover: { value: '#ffffff' },
      textOnInteractive01Pressed: { value: '#ffffff' },
      textOnInteractive01Focus: { value: '#ffffff' },

      interactive02: { value: '#333333' },
      interactive02Hover: { value: '#00338D' },
      interactive02Pressed: { value: '#232323' },
      interactive02Focus: { value: '#EB7974' },
      textOnInteractive02: { value: '#ffffff' },
      textOnInteractive02Hover: { value: '#ffffff' },
      textOnInteractive02Pressed: { value: '#ffffff' },
      textOnInteractive02Focus: { value: '#ffffff' },

      interactive03: { value: '#ffffff' },
      interactive03Hover: { value: '#00338D' },
      interactive03Pressed: { value: '#092C4A' },
      interactive03Focus: { value: '#EB7974' },

      interactive04: { value: '#333333' },
      interactive04Hover: { value: '#333333' },
      interactive04Pressed: { value: '#00338D' },
      interactive04Focus: { value: '#EB7974' },
      textOnInteractive04: { value: '#ffffff' },
      textOnInteractive04Hover: { value: '#ffffff' },
      textOnInteractive04Pressed: { value: '#ffffff' },
      textOnInteractive04Focus: { value: '#ffffff' },

      disabled01: { value: '#D6D6D6' },
      disabled02: { value: '#b5b5b5' },

      primaryBackground: { value: theme.paper },
      ui01: { value: theme.paper },
      ui02: { value: '#f6f6f7' },
      ui03: { value: '#E8E8EA' },
      ui04: { value: '#b5b5b5' },
      ui05: { value: '#333333' },

      text01: { value: '#333333' },
      text02: { value: '#555555' },
      text03: { value: '#bfbfbf' },
      text04: { value: '#8d8d8d' },

      icons01: { value: '#333333' },
      icons02: { value: '#555555' },
      icons03: { value: '#bfbfbf' },
      icons04: { value: '#8d8d8d' },

      info: { value: '#50ABFF' },
      success: { value: '#99CF36' },
      error: { value: '#DE2B31' },
      focusLine: { value: '#0022FF' },

      facebook: { value: '#39579a' },
      twitter: { value: '#27bffc' },
      linkedin: { value: '#013f70' },
      whatsapp: { value: '#41b700' },
    },
  },

  mediaquery: {
    description: 'Magma mediaquerires definitions',
    mediaqueries: [
      {
        label: 'default',
        minWidth: null,
        container: '100%',
        sideMargin: '100px',
      },
      {
        label: 's',
        minWidth: '600px',
        container: '600px',
        sideMargin: '100px',
      },
      {
        label: 'm',
        minWidth: '768px',
        container: '768px',
        sideMargin: '100px',
      },
      {
        label: 'l',
        minWidth: '1024px',
        container: '1024px',
        sideMargin: '100px',
      },
      {
        label: 'xl',
        minWidth: '1216px',
        container: '1216px',
        sideMargin: '100px',
      },
      {
        label: 'xxl',
        minWidth: '1542px',
        container: '1542',
        sideMargin: '100px',
      },
      {
        label: 'xxxl',
        minWidth: '1680px',
        container: '1680',
        sideMargin: '100px',
      },
    ],
  },

  textStyle: {
    defaultStyles: {
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '0px',
      fontSize: '10px',
    },
    textStyles: [
      {
        name: 'display01',
        fontFamily: 'primary',
        fontWeight: '100',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display02',
        fontFamily: 'primary',
        fontWeight: '200',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display03',
        fontFamily: 'primary',
        fontWeight: '300',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display04',
        fontFamily: 'primary',
        fontWeight: '400',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display05',
        fontFamily: 'primary',
        fontWeight: '500',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display06',
        fontFamily: 'primary',
        fontWeight: '600',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display07',
        fontFamily: 'primary',
        fontWeight: '700',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display08',
        fontFamily: 'primary',
        fontWeight: '800',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },
      {
        name: 'display09',
        fontFamily: 'primary',
        fontWeight: '900',
        fontSize: '62px',
        lineHeight: '75px',
        responsive: [
          { breakpoint: 'm', fontSize: '90px', lineHeight: '90px' },
          { breakpoint: 'xxl', fontSize: '100px', lineHeight: '100px' },
        ],
      },

      {
        name: 'heading3xl',
        fontFamily: 'primary',
        fontSize: '30px',
        lineHeight: '36px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '74px',
            lineHeight: '79px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '90px',
            lineHeight: '96px',
          },
        ],
      },
      {
        name: 'heading2xl',
        fontFamily: 'primary',
        fontSize: '30px',
        lineHeight: '36px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '50px',
            lineHeight: '55px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '64px',
            lineHeight: '72px',
          },
        ],
      },

      {
        name: 'headingxl',
        fontFamily: 'primary',
        fontSize: '24px',
        lineHeight: '30px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '35px',
            lineHeight: '42px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '48px',
            lineHeight: '56px',
          },
        ],
      },
      {
        name: 'headingxlAlt',
        fontFamily: 'secondary',
        fontSize: '28px',
        lineHeight: '34px',
        fontWeight: '400',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '36px',
            lineHeight: '46px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '45px',
            lineHeight: '56px',
          },
        ],
      },
      {
        name: 'headingl',
        fontFamily: 'primary',
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '30px',
            lineHeight: '38px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '36px',
            lineHeight: '42px',
          },
        ],
      },
      {
        name: 'headingm',
        fontFamily: 'primary',
        fontSize: '15px',
        lineHeight: '22px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '28px',
            lineHeight: '34px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '30px',
            lineHeight: '38px',
          },
        ],
      },
      {
        name: 'headings',
        fontFamily: 'primary',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '18px',
            lineHeight: '24px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '24px',
            lineHeight: '32px',
          },
        ],
      },
      {
        name: 'headingxs',
        fontFamily: 'primary',
        fontSize: '13px',
        lineHeight: '18px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '15px',
            lineHeight: '22px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '18px',
            lineHeight: '24px',
          },
        ],
      },
      {
        name: 'heading2xs',
        fontFamily: 'primary',
        fontSize: '13px',
        lineHeight: '18px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '15px',
            lineHeight: '22px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '15px',
            lineHeight: '22px',
          },
        ],
      },
      {
        name: 'heading3xs',
        fontFamily: 'primary',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [],
      },
      {
        name: 'bodyLead',
        fontFamily: 'secondary',
        fontSize: '15px',
        lineHeight: '22px',
        fontWeight: '400',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: '400',
          },
          {
            breakpoint: 'xxl',
            fontSize: '22px',
            lineHeight: '32px',
          },
        ],
      },
      {
        name: 'body',
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: '400',
        fontFamily: 'secondary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '15px',
            lineHeight: '24px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '17px',
            lineHeight: '26px',
          },
        ],
      },
      {
        name: 'bodyInline',
        fontSize: '13px',
        lineHeight: '22px',
        fontFamily: 'secondary',
        fontWeight: '400',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '22px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '15px',
            lineHeight: '24px',
          },
        ],
      },
      {
        name: 'bodySmall',
        fontSize: '10px',
        lineHeight: '14px',
        fontFamily: 'primary',
        fontWeight: '800',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '11px',
            lineHeight: '16px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '13px',
            lineHeight: '18px',
          },
        ],
      },
      {
        name: 'subtitle01',
        fontFamily: 'secondary',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400',
        textAlign: 'center',
        fontStyle: 'italic',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '18px',
            lineHeight: '28px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '22px',
            lineHeight: '32px',
          },
        ],
      },
      {
        name: 'subtitle02',
        fontFamily: 'secondary',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400',
        fontStyle: 'italic',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '15px',
            lineHeight: '24px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '18px',
            lineHeight: '28px',
          },
        ],
      },
      {
        name: 'subtitle03',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: '400',
        fontStyle: 'italic',
        fontFamily: 'secondary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '20px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '14px',
            lineHeight: '20px',
          },
        ],
      },

      {
        name: 'buttonM',
        fontSize: '12px',
        lineHeight: '25px',
        fontWeight: '800',
        fontFamily: 'primary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '20px',
          },
        ],
      },

      {
        name: 'buttonS',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '800',
        fontFamily: 'primary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '11px',
          },
        ],
      },

      {
        name: 'tiny2xl',
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: '800',
        fontFamily: 'primary',
        textTransform: 'uppercase',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '11px',
            lineHeight: '16px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '13px',
            lineHeight: '18px',
          },
        ],
      },

      {
        name: 'tinyxl',
        fontSize: '13px',
        lineHeight: '20px',
        fontWeight: '400',
        fontFamily: 'secondary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '20px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '13px',
            lineHeight: '20px',
          },
        ],
      },

      {
        name: 'tinyl',
        fontSize: '13px',
        lineHeight: '20px',
        fontWeight: '600',
        fontFamily: 'secondary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '20px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '13px',
            lineHeight: '20px',
          },
        ],
      },
      {
        name: 'tinym',
        fontSize: '13px',
        lineHeight: '20px',
        fontWeight: '400',
        fontFamily: 'secondary',
        fontStyle: 'italic',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '13px',
            lineHeight: '20px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '13px',
            lineHeight: '20px',
          },
        ],
      },
      {
        name: 'tinys',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '400',
        fontFamily: 'primary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '11px',
            lineHeight: '16px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '11px',
            lineHeight: '16px',
          },
        ],
      },
      {
        name: 'tinyxs',
        fontSize: '9px',
        lineHeight: '14px',
        fontWeight: '400',
        textTransform: 'uppercase',
        fontFamily: 'primary',
        responsive: [
          {
            breakpoint: 'm',
            fontSize: '9px',
            lineHeight: '14px',
          },
          {
            breakpoint: 'xxl',
            fontSize: '9px',
            lineHeight: '14px',
          },
        ],
      },
      {
        name: 'navigation',
        fontSize: '24px',
        lineHeight: '36px',

        fontWeight: '800',
        textTransform: 'uppercase',
        fontFamily: 'primary',
        responsive: [
          {
            fontSize: '11px',
            lineHeight: '20px',
            breakpoint: 'xl',
          },
        ],
      },
    ],
  },
  gradient: {
    description: '',
    gradients: {
      spectrum: {
        direction: '60deg',
        stops: [
          {
            color: '#ff0000',
            opacity: 1.0,
            position: '0%',
          },
          {
            color: '#ff00ff',
            opacity: 1.0,
            position: '15%',
          },
          {
            color: '#0000ff',
            opacity: 1.0,
            position: '33%',
          },
          {
            color: '#00ffff',
            opacity: 1.0,
            position: '49%',
          },
          {
            color: '#00ff00',
            opacity: 1.0,
            position: '67%',
          },
          {
            color: '#ffff00',
            opacity: 1.0,
            position: '84%',
          },
          {
            color: '#0000ff',
            opacity: 1.0,
            position: '100%',
          },
        ],
      },

      gradient01: {
        direction: 'to top',
        stops: [
          {
            color: '#443CF3',
            opacity: 1.0,
            position: '0%',
          },
          {
            color: '#425FF7',
            opacity: 1.0,
            position: '100%',
          },
        ],
      },
    },
  },

  shadow: {
    description: '',
    shadows: {
      small: {
        x: 0,
        y: 2,
        blur: 2,
        color: '#000000',
        opacity: 0.5,
      },
      big: {
        x: 0,
        y: 25,
        blur: 96,
        color: '#000000',
        opacity: 0.9,
      },
    },
  },
  timming: {
    xs: '0.12s',
    s: '0.25s',
    m: '0.5s',
    l: '1s',
    hover: '0.33s',
    stickyNavigation: '0.8s',
    moduleFadeIn: '0.66s',
    moduleTranslate: '24px',
  },
  radii: {
    s: '4px',
    m: '8px',
    l: '16px',
    button: '0px',
    circle: '999px',
  },
  line: {
    s: '1px',
    m: '2px',
    l: '4px',
    button: '1px',
  },

  space: [
    '0px',
    '8px',
    '16px',
    '24px',
    '32px',
    '48px',
    '56px',
    '64px',
    '96px',
    '128px',
    '196px',
  ],

  negateSpace: [
    '0px',
    '-8px',
    '-16px',
    '-24px',
    '-32px',
    '-48px',
    '-56px',
    '-64px',
    '-96px',
    '-128px',
    '-196px',
  ],

  spacing: {
    xxxs: '0px',
    xxs: '8px',
    xs: '16px',
    s: '24px',
    m: '32px',
    l: '48px',
    xl: '56px',
    xxl: '64px',
    xxxl: '80px',
    zero: '0',
    buttonM: {
      minWidth: '224px',
      minHeight: '56px',
      paddingX: '24px',
      iconSize: '24px',
      ladding: '32px',
    },
    buttonNavCta: {
      minWidth: '0px',
      minHeight: '40px',
      paddingX: '24px',
      ladding: '32px',
      iconSize: '16px',
    },
    buttonS: {
      minWidth: '184px',
      minHeight: '32px',
      paddingX: '16px',
      ladding: '32px',
      iconSize: '24px',
    },
    buttonFeatured: {
      minWidth: '350px',
      minHeight: '56px',
      paddingX: '24px',
      ladding: '32px',
      iconSize: '24px',
    },
  },

  fontWeight: {
    thin: '100',
    light: '400',
    normal: '400',
    bold: '600',
    extraBold: '800',
  },

  lineHeight: {
    s: 1,
    m: 1.2,
    l: 1.5,
    xl: 3,
  },

  matchMedia: {
    phone: '(min-width: 320px) and (max-width: 568px)',
    tablet: '(min-width : 768px) and (max-width : 1024px)',
    desktop: '(min-width : 1224px)',
  },
};
