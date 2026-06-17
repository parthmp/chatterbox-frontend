export default {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
    },
    myteal: {
      50:  '#e8f4f7',
      100: '#c6e5ec',
      200: '#9dd0dc',
      300: '#6db8ca',
      400: '#449fb5',
      500: '#2F7B8F',
      600: '#266475',
      700: '#1d4d5b',
      800: '#143641',
      900: '#0b1f27',
      950: '#051014',
    },
  },

  semantic: {
    primary: {
      50:  '{myteal.50}',
      100: '{myteal.100}',
      200: '{myteal.200}',
      300: '{myteal.300}',
      400: '{myteal.400}',
      500: '{myteal.500}',
      600: '{myteal.600}',
      700: '{myteal.700}',
      800: '{myteal.800}',
      900: '{myteal.900}',
      950: '{myteal.950}',
    },

    colorScheme: {
      light: {
       
        content: {
          background: '#F8FFFB',
        },
        primary: {
          color:         '{myteal.500}',
          contrastColor: '#ffffff',
          hoverColor:    '{myteal.600}',
          activeColor:   '{myteal.700}',
        },
        highlight: {
          background:      '{myteal.50}',
          focusBackground: '{myteal.100}',
          color:           '{myteal.800}',
          focusColor:      '{myteal.900}',
        },
        focusRing: {
          color:  '{myteal.500}',
          shadow: '0 0 0 3px {myteal.200}',
        },
      },
      dark: {
        content: {
          background: '#151515',
        },
      
        primary: {
          color:         '#2F7B8F',
          contrastColor: '#ffffff',
          hoverColor:    '#1C5767',
          activeColor:   '#1C5565',
        },
        highlight: {
          background:      '{myteal.900}',
          focusBackground: '{myteal.800}',
          color:           '{myteal.100}',
          focusColor:      '{myteal.50}',
        },
        focusRing: {
          color:  '{myteal.400}',
          shadow: '0 0 0 3px {myteal.700}',
        },
      },
    },
  },
}