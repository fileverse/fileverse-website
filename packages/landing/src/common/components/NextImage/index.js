import Image from 'next/image';

const NextImage = ({ ...props }) => {
  console.log(props);
  return (<Image {...props} />);
};

export default NextImage;
