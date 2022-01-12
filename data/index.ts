const result = () => {
    const { age } = useMe();
  return  {
    introduction: {
      quick: `A ${age} year old web and mobile developer from France.`,
    },
  };
}

export default result();
