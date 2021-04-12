import { BaseIconProps } from '@icons';

export interface ExperienceIconTypeProps {
  experienceType?:
    | 'time'
    | 'people'
    | 'language'
    | 'computer'
    | 'smile'
    | 'activity';
}

export const ExperienceIcon: React.FC<
  BaseIconProps & ExperienceIconTypeProps
> = ({ experienceType, ...props }) => {
  const types = {
    time: <TimeIcon {...props} />,
    people: <PeopleIcon {...props} />,
    language: <LanguageIcon {...props} />,
    computer: <ComputerIcon {...props} />,
    smile: <SmileIcon {...props} />,
    activity: <ActivityIcon {...props} />,
  };
  return types[experienceType];
};

export const TimeIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17.08 5.104v10.421l9.026 5.213-1 1.732-10.027-5.79V5.105zM7.5 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm20 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7.5 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm17 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM11 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};

export const PeopleIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="m22 7c2.7614237 0 5 2.23857625 5 5 0 1.4483542-.6158223 2.7528755-1.5999105 3.6660075 3.2075261 1.3080072 5.4902937 4.4154553 5.5960734 8.0686302l.0038371.2653623h-2c0-3.5261219-2.6071882-6.4433024-5.9989899-6.9289666l-.0001094-2.2420576c1.1647219-.4120906 1.9990993-1.5230936 1.9990993-2.8289758 0-1.6568542-1.3431458-3-3-3-1.5976809 0-2.9036609 1.24892-2.9949073 2.8237272l-.0050927.1762728.0819616.0625271c1.1677123.9152829 1.9180384 2.3387539 1.9180384 3.9374729 0 1.4479059-.615441 2.7520678-1.5989966 3.6651593 3.207085 1.309499 5.4893907 4.4166818 5.5951595 8.0694784l.0038371.2653623h-2c0-3.5261219-2.6071882-6.4433024-5.9989899-6.9289666l-.0001094-2.2420576c1.1647219-.4120906 1.9990993-1.5230936 1.9990993-2.8289758 0-1.6568542-1.3431458-3-3-3s-3 1.3431458-3 3c0 1.3062521.8348501 2.4175144 2.0000889 2.8293257l-.0000889 2.2415643c-3.3148214.4741509-5.8804754 3.2706475-5.99594098 6.6884602l-.00405902.2406498h-2c0-3.7671593 2.31452169-6.9937332 5.5991096-8.335266-.9836686-.9126662-1.5991096-2.2168281-1.5991096-3.664734 0-1.598719.7503261-3.02219 1.9180384-3.9374729l.0819616-.0625271c0-1.6568542-1.3431458-3-3-3-1.65685425 0-3 1.3431458-3 3 0 1.3062521.8348501 2.4175144 2.00008893 2.8293257l-.00008893 2.2415643c-3.31482137.4741509-5.8804754 3.2706475-5.99594098 6.6884602l-.00405902.2406498h-2c0-3.7671593 2.31452169-6.9937332 5.5991096-8.335266-.98366859-.9126662-1.5991096-2.2168281-1.5991096-3.664734 0-2.76142375 2.23857625-5 5-5 2.4601119 0 4.505252 1.77670575 4.9222714 4.1169685.3461998-.0766772.707259-.1169685 1.0777286-.1169685s.7315288.0402913 1.0790344.1167309c.4156259-2.33994891 2.4608009-4.1167309 4.9209656-4.1167309z"
      ></path>
    </svg>
  );
};

export const LanguageIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M16.00049,31.0791,11.84326,26H6a5.00588,5.00588,0,0,1-5-5V7A5.00588,5.00588,0,0,1,6,2H26a5.00588,5.00588,0,0,1,5,5V21a5.00588,5.00588,0,0,1-5,5H20.1543ZM6,4A3.00328,3.00328,0,0,0,3,7V21a3.00328,3.00328,0,0,0,3,3h6.79053l3.209,3.9209L19.207,24H26a3.00328,3.00328,0,0,0,3-3V7a3.00328,3.00328,0,0,0-3-3Z"
      ></path>
    </svg>
  );
};

export const ComputerIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M27 3a2 2 0 0 1 1.995 1.85L29 5l-.001 14.816 2.43 6.482a2 2 0 0 1-.881 2.44l-.145.074-.144.06a2 2 0 0 1-.523.12l-.179.008H2.443a2 2 0 0 1-1.928-2.532l.055-.17L3 19.819 3 5a2 2 0 0 1 1.697-1.977l.154-.018L5 3zm.306 18H4.692l-2.249 6h27.114zM19 23v2h-6v-2zm8-18H5l-.001 14h22zM16 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};

export const SmileIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="m16.7597838 18.236214c2.9023982.9912096 4.8547348 2.9095164 5.2334132 5.1815865.0453975.2723852-.1386123.5299989-.4109975.5753965-.2723852.0453975-.5299989-.1386123-.5753965-.4109975-.2434308-1.4605852-1.3196462-2.7852247-3.006803-3.7148829v3.6326834c0 .2761424-.2238576.500078-.5.500078s-.5-.2239356-.5-.500078v-4.1073852c-.3178327-.1291113-.6515089-.245905-1-.3491799v3.4565651c0 .2761424-.2238576.5-.5.5h-7c-.27614237 0-.5-.2238576-.5-.5v-3.4837989c-.34920291.0996989-.68279767.2128777-1 .3384673v4.1453316c0 .2761424-.22385763.500078-.5.500078s-.5-.2239356-.5-.500078v-3.6797858c-1.69506802.9212223-2.7555773 2.2546309-3.00680304 3.7619853-.04539752.2723852-.30301129.456395-.57539645.4109975-.27238516-.0453976-.456395-.3030113-.41099747-.5753965.38616693-2.3170016 2.2930421-4.2301789 5.20614625-5.2044819-.35823846-.3013528-.6950518-.6373923-1.00654353-1.0054553-.37573893.1651947-.78491908.2525379-1.20640576.2525379-1.65685425 0-3-1.3431458-3-3 0-.3027309.04502163-.5995648.1321259-.8828028-.71244196-.6542578-1.1321259-1.5812644-1.1321259-2.5775984 0-1.46793141.91006526-2.74734578 2.22575914-3.26095339-.14814337-.39130626-.22575914-.80974601-.22575914-1.23904661 0-1.93299662 1.56700338-3.5 3.5-3.5.29654618 0 .58825457.03700764.86986971.1090644.75569118-1.85180097 2.56963834-3.1090644 4.63013029-3.1090644 2.0604919 0 3.8744391 1.25726343 4.6301303 3.1090644.2816151-.07205676.5733235-.1090644.8698697-.1090644 1.9329966 0 3.5 1.56700338 3.5 3.5 0 .4293006-.0776158.84774035-.2257591 1.23904661 1.3156938.51360761 2.2257591 1.79302198 2.2257591 3.26095339 0 .996334-.4196839 1.9233406-1.1321259 2.5775984.0871043.283238.1321259.5800719.1321259.8828028 0 1.6568542-1.3431458 3-3 3-.4214675 0-.8306297-.0873353-1.2063546-.2525154-.3192893.3773198-.6653138.7210707-1.0338616 1.0283282zm-7.7597838 1.110018v2.653768h6v-2.6538008c-.9359992.425507-1.9509207.6538008-3 .6538008-1.0488055 0-2.0637377-.228128-3-.653768zm-2.16119825-2.9433234c1.31794986 1.6438816 3.17400865 2.5970914 5.16119825 2.5970914 1.9884133 0 3.8447911-.954764 5.1611622-2.5969798.0135699-.0419726.0329643-.0828358.0584159-.1214735.402034-.610322.7447971-1.2877825 1.0189462-2.0156674-1.3238875-.5107719-2.2385243-1.7945385-2.2385243-3.2658793 0-.4294038.0776531-.8479416.225866-1.23932884-.4488995-.1755314-.8563284-.44228731-1.1970469-.78204121-.8602044.65605286-1.9163511 1.02137005-3.0288191 1.02137005s-2.16861468-.36531719-3.02881906-1.02137005c-.3407185.3397539-.74814739.60650981-1.19704694.78204121.1482129.39138734.225866.80992504.225866 1.23932884 0 1.4713408-.91463679 2.7551074-2.2385243 3.2658793.27414913.7278849.61691218 1.4053454 1.01894615 2.0156674.02542905.0386034.04481169.0794284.0583799.1213619zm12.16119825.0574926c1.1045695 0 2-.8954305 2-2 0-.2917161-.0621791-.573685-.1807516-.8323254-.0988468-.215613-.0326037-.4710039.1585815-.6113886.6381817-.4686084 1.0221701-1.2101574 1.0221701-2.0166872 0-1.20457942-.8584553-2.23190311-2.0269705-2.45540423-.3423492-.0654809-.5143359-.45235494-.333586-.75038207.2347346-.38703911.3605565-.83077809.3605565-1.2942137 0-1.38071187-1.1192881-2.5-2.5-2.5-.3425741 0-.6746455.06865643-.9820556.20012585-.2758963.11799202-.5928572-.03190503-.6766961-.32002295-.4926984-1.69318965-2.0507952-2.8801029-3.8412483-2.8801029s-3.34854995 1.18691325-3.84124827 2.8801029c-.08383893.28811792-.40079982.43801497-.67669615.32002295-.30741003-.13146942-.63948151-.20012585-.98205558-.20012585-1.38071187 0-2.5 1.11928813-2.5 2.5 0 .46343561.12582189.90717459.36055652 1.2942137.18074993.29802713.0087632.68490117-.33358598.75038207-1.1685152.22350112-2.02697054 1.25082481-2.02697054 2.45540423 0 .8065298.38398841 1.5480788 1.02217013 2.0166872.19118513.1403847.25742822.3957756.15858148.6113886-.11857248.2586404-.18075161.5406093-.18075161.8323254 0 1.1045695.8954305 2 2 2 .22416468 0 .4424599-.0367809.64834795-.1072621-.40607285-.6949771-.74490529-1.454694-1.00750995-2.261808-.092082-.2830135.08193433-.583311.37326785-.644143 1.14894855-.2399065 1.98589415-1.2580044 1.98589415-2.4471881 0-.4634356-.12582189-.9071746-.36055652-1.2942137-.18074993-.29802713-.0087632-.68490117.33358598-.75038207.61922765-.11843925 1.16871021-.46870406 1.54120119-.97423467.17788399-.2414174.52679294-.27303797.74518013-.06753344.73723387.69374448 1.70747812 1.08636388 2.74058922 1.08636388s2.0033554-.3926194 2.7405892-1.08636388c.2183872-.20550453.5672962-.17388396.7451802.06753344.3724909.50553061.9219735.85579542 1.5412011.97423467.3423492.0654809.5143359.45235494.333586.75038207-.2347346.3870391-.3605565.8307781-.3605565 1.2942137 0 1.1891837.8369456 2.2072816 1.9858942 2.4471881.2913335.060832.4653498.3611295.3732678.644143-.2626047.807114-.6014371 1.5668309-1.00751 2.261808.2058881.0704812.4241833.1072621.648348.1072621zm-5.4994991-.9834994c.0072117-.1532986.0846601-.3012677.222149-.3929269.2297643-.1531763.540199-.0910893.6933752.138675l.5.75c.1531763.2297643.0910893.540199-.138675.6933752-.2297643.1531763-.540199.0910893-.6933752-.138675l-.084603-.1269044c-.471871.4035626-1.1480328.5995543-1.9993719.5995543s-1.5275009-.1959917-1.9993719-.5995543l-.08460295.1269044c-.15317623.2297643-.4636109.2918513-.69337525.138675-.22976434-.1531762-.29185128-.4636109-.13867505-.6933752l.5-.75c.15317623-.2297643.46361095-.2918513.69337525-.138675.1374889.0916592.2149373.2396283.222149.3929269.2539524.3412073.7351995.5230982 1.5005009.5230982s1.2465485-.1818909 1.5005009-.5230982zm-5.41652605-2.754305c.31798843-.4769827.80932294-.7226499 1.41602515-.7226499.6067022 0 1.0980367.2456672 1.4160251.7226499.1531763.2297643.0910893.540199-.138675.6933752s-.540199.0910893-.6933752-.138675c-.12645606-.1896841-.30178822-.2773501-.5839749-.2773501s-.45751884.087666-.58397485.2773501c-.15317623.2297643-.4636109.2918512-.69337525.138675-.22976434-.1531762-.29185128-.4636109-.13867505-.6933752zm5.00000005 0c.3179884-.4769827.8093229-.7226499 1.4160251-.7226499s1.0980367.2456672 1.4160251.7226499c.1531763.2297643.0910893.540199-.138675.6933752s-.540199.0910893-.6933752-.138675c-.1264561-.1896841-.3017882-.2773501-.5839749-.2773501s-.4575188.087666-.5839749.2773501c-.1531762.2297643-.4636109.2918512-.6933752.138675s-.2918513-.4636109-.138675-.6933752z"
      ></path>
    </svg>
  );
};

export const ActivityIcon: React.FC<BaseIconProps> = ({ fill }) => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M17.481 2.921a3.07 3.07 0 0 1 .949 3.983 5.68 5.68 0 0 0 .52-.62c.44-.606.79-1.307.98-1.93a.98.98 0 0 1 .717-.655c.306-.07.736.004.947.417a5.43 5.43 0 0 1 .606 2.49c0 1.81-.897 3.416-2.287 4.495l.001 9.88c0 .862-1.131 1.183-1.583.449l-2.401-3.9a.253.253 0 0 0-.431 0l-2.402 3.9c-.308.501-.935.51-1.3.191-.284.034-.646-.055-.855-.387L8.53 17.398a.253.253 0 0 0-.428 0l-2.413 3.836c-.229.363-.639.435-.93.375-.288-.06-.672-.304-.672-.78v-9.728C2.698 10.022 1.8 8.415 1.8 6.606c0-.89.217-1.734.606-2.49.21-.41.637-.489.946-.415.3.072.607.303.705.676.186.71.542 1.555.992 2.282.46.743.971 1.286 1.434 1.492a.486.486 0 0 1-.396.887C5.352 8.71 4.713 7.962 4.223 7.17a9.887 9.887 0 0 1-1.061-2.385 4.443 4.443 0 0 0-.39 1.82c0 1.544.8 2.938 2.082 3.857.168.12.242.335.183.533a.49.49 0 0 1 .02.138v9.28L7.28 16.88a1.225 1.225 0 0 1 2.072 0l2.163 3.438-.002-6.623a4.404 4.404 0 0 0-.676 1.373c-.208.749-1.27 1.016-1.653.253a5.052 5.052 0 0 1-.54-2.268c0-1.9 1.062-3.567 2.677-4.567H8.71a3.07 3.07 0 1 1 1.856-.972h2.896a3.07 3.07 0 0 1 4.02-4.593zm3.342 1.83a7.819 7.819 0 0 1-1.088 2.104c-.408.56-.905 1.078-1.457 1.418.12.082.237.17.348.262a.486.486 0 1 1-.624.744 3.517 3.517 0 0 0-1.972-.78 3.158 3.158 0 0 1-.714-.013l-.347.001a.502.502 0 0 1-.112.013c-2.892 0-5.214 2.053-5.214 4.553 0 .453.076.897.223 1.32l.076.2.007-.022c.281-.829.802-1.626 1.496-2.303l.213-.2a.5.5 0 0 1 .828.446l.059 7.98 2.127-3.453a1.224 1.224 0 0 1 2.085 0l2.186 3.55v-9.396c0-.273-.05-.537-.14-.785a.486.486 0 0 1 .893-.379c.957-.895 1.533-2.097 1.533-3.405a4.45 4.45 0 0 0-.406-1.855zM8.343 3.344l-.157.002a2.1 2.1 0 0 0-.02 4.191l.074-.017.075-.006h.325a2.1 2.1 0 0 0-.296-4.17zm7.413-.002a2.1 2.1 0 0 0-.369 4.172h.327c.1 0 .197.003.295.009a2.1 2.1 0 0 0-.253-4.18zm-15.13.292l.085.017.084.033.74.37a.5.5 0 0 1-.365.928l-.084-.033-.739-.37a.5.5 0 0 1 .278-.945zm23.29.274a.5.5 0 0 1-.146.624l-.077.047-.739.37a.5.5 0 0 1-.524-.847l.077-.047.738-.37a.5.5 0 0 1 .671.223zm-1.333-2.07a.5.5 0 0 1 .257.587l-.032.084-.368.738a.5.5 0 0 1-.928-.361l.032-.084.368-.74a.5.5 0 0 1 .67-.224zM2.02 1.92l.059.066.047.076.369.739a.5.5 0 0 1-.847.523L1.6 3.247l-.368-.738a.5.5 0 0 1 .788-.589z"
      ></path>
    </svg>
  );
};
