import { Model, useRepo } from 'pinia-orm';

class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.uid(),
      username: this.string(''),
      firstName: this.string(''),
      lastName: this.string(''),
      githubDisplayName: this.string(''),
      githubId: this.attr(null),
      avatarUrl: this.string(''),
    }
  }

  declare id: string
  declare username: string
  declare firstName: string
  declare lastName: string
  declare githubDisplayName: string
  declare githubId: string
  declare avatarUrl: string
}

export const userRepo = useRepo(User)