import { NavigationGuard } from 'vue-router';

const isSample = true;

export const sampleGuard: NavigationGuard = (to, from, next) => {
  if (isSample) {
    next();
  } else {
    console.log('isSample is false. sampleGuard에 막힘...');
  }
};
