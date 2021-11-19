const MyyMixin = {
  methods: {
    foo: function () {
      console.log('foo');
    },
    conflicting: function () {
      console.log('from mixin');
    },
  },
};
export default MyyMixin;
