interface CreateOptions {
  bare?: boolean;
}

const create = (options: CreateOptions) => {
  console.log('options', options);
};

export default create;
