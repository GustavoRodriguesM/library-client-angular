import { AuthorModule } from './author.module';

describe('AuthorModule', () => {
  let authorsModule: AuthorModule;

  beforeEach(() => {
    authorsModule = new AuthorModule();
  });

  it('should create an instance', () => {
    expect(authorsModule).toBeTruthy();
  });
});
