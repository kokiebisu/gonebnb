import { FillIconProps } from '..';

export type StayIconTemplateProps =
  | ({ stayType: 'doublebed' } & FillIconProps)
  | ({ stayType: 'house' } & FillIconProps)
  | ({ stayType: 'sparkle' } & FillIconProps)
  | ({ stayType: 'door' } & FillIconProps)
  | ({ stayType: 'calendar' } & FillIconProps)
  | ({ stayType: 'guidelines' } & FillIconProps)
  | { stayType: 'clock' }
  | { stayType: 'checkin' }
  | { stayType: 'children' }
  | { stayType: 'smoking' }
  | { stayType: 'pets' }
  | { stayType: 'parties' }
  | { stayType: 'cleaning' }
  | { stayType: 'distancing' }
  | { stayType: 'check' }
  | { stayType: 'caution' };

export const StayIconTemplate = ({
  ...props
}: StayIconTemplateProps): JSX.Element => {
  switch (props.stayType) {
    case 'doublebed':
      return <DoubleBedIcon {...props} />;
    case 'house':
      return <HouseIcon {...props} />;
    case 'sparkle':
      return <SparkleIcon {...props} />;
    case 'door':
      return <DoorIcon {...props} />;
    case 'calendar':
      return <CalendarIcon {...props} />;
    case 'guidelines':
      return <GuidelinesIcon {...props} />;
    case 'clock':
      return <ClockIcon />;
    case 'checkin':
      return <CheckInIcon />;
    case 'children':
      return <ChildrenIcon />;
    case 'smoking':
      return <SmokingIcon />;
    case 'pets':
      return <PetsIcon />;
    case 'parties':
      return <PartiesIcon />;
    case 'cleaning':
      return <CleaningIcon />;
    case 'distancing':
      return <DistancingIcon />;
    case 'check':
      return <CheckIcon />;
    case 'caution':
      return <CautionIcon />;
    default:
      throw new Error(`[STAY ICON] Provided stayType doesn't exist`);
  }
};

const HouseIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z"
      ></path>
    </svg>
  );
};

const SparkleIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"
      ></path>
    </svg>
  );
};

const DoorIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm-4 2H7l-.001 26H21zm4 0h-2v26h1.999zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};

const CalendarIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z"
      ></path>
    </svg>
  );
};

const GuidelinesIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M28.477 1.07a2 2 0 0 1 2.515 1.754L31 3v23.04a2 2 0 0 1-1.34 1.888l-.153.047-13 3.41a2 2 0 0 1-.813.041l-.201-.041-13-3.41a2 2 0 0 1-1.487-1.776L1 26.04V3a2 2 0 0 1 2.35-1.969l.173.039L16 4.448zM29 3L16.523 6.378a2 2 0 0 1-.873.039l-.173-.039L3 3v23.04l13 3.41 13-3.41zm-2 17.984v2l-9 2.5v-2zm0-7v2l-9 2.5v-2zm0-7v2l-9 2.5v-2z"
      ></path>
    </svg>
  );
};

export const DoubleBedIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 480 480">
      <g>
        <g>
          <path
            fill={fill}
            d="M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328
c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16
H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672
C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112
c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8
v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16
s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368
v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16
c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64
c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64
c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16
c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z
 M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z
 M464,384H16v-96h448V384z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={fill}
            d="M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            fill={fill}
            d="M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z"
          />
        </g>
      </g>
    </svg>
  );
};

const ClockIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󰀥</span>
  );
};

const CheckInIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󰄄</span>
  );
};

const ChildrenIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󱤄</span>
  );
};

const SmokingIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󱤈</span>
  );
};

const PetsIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󱤆</span>
  );
};

const PartiesIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󱤂</span>
  );
};

const CleaningIcon = (): JSX.Element => {
  return (
    <span style={{ width: '100%', height: 'auto', display: 'block' }}>󹀁</span>
  );
};

const DistancingIcon = (): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path d="M5 5v.414l4 4v3.172L4.464 17.12C3.527 18.06 3 18.674 3 20v9c0 1.644 1.356 2.982 3 3 6.645-.012 10.645-.012 12 0 1.657.014 3-1 3-3v-9c0-1.351-.547-2.126-1.516-3.067L15 12.577V9a2.99 2.99 0 0 1 2.083-2.842 8.957 8.957 0 0 0 2.17 4.798l1.499-1.324A6.959 6.959 0 0 1 19.078 6H23V0H10a5 5 0 0 0-5 5zm14-3h2v2h-2zm-1.032 22.686h.004c.348 0 .69-.034 1.028-.084v2.02c-.34.039-.682.064-1.028.064h-.004a8.946 8.946 0 0 1-6.362-2.636A6.948 6.948 0 0 0 6.659 22h-.003A7.07 7.07 0 0 0 5 22.204v-2.048c.54-.1 1.093-.156 1.655-.156h.005a8.94 8.94 0 0 1 6.36 2.636 6.956 6.956 0 0 0 4.948 2.05zM11 10h2v2h-2zm17-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  );
};

const CautionIcon = (): JSX.Element => {
  return (
    <span style={{ display: 'block', width: '100%', height: 'auto' }}>󱠃</span>
  );
};

export const CheckIcon = (): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15 15-6.729 15-15S24.271 1 16 1zm-2.5 22.621L6.879 17 9 14.879l4.5 4.5 9.5-9.5L25.121 12 13.5 23.621z"
      ></path>
    </svg>
  );
};
