const result = () => {
    const { age } = useMe();
  return  {
    introduction: {
      quick: `A ${age} year old self-taught fullstack developer from France.`,
    },
  };
}

export default result();
