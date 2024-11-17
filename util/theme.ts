import colors from "tailwindcss/colors";

export const theme= {
  light: {
    textStyle: colors.stone[800],
    textClass: 'text-stone-800',
    backgroundStyle: colors.stone[50],
    tint: colors.emerald[600],
    tintTextClass: 'text-emerald-600',
  },
  dark:  {
    textStyle: colors.stone[50],
    textClass: 'text-stone-50',
    backgroundStyle: colors.stone[800],
    tint: colors.emerald[400],
    tintTextClass: 'text-emerald-400',
  },
}