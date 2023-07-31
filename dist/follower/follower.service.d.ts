import { Follower } from './model/follower.model';
export declare class FollowerService {
    private readonly followerRepo;
    constructor(followerRepo: typeof Follower);
    follow(userId: number, followerId: number): Promise<Follower>;
    unFollow(userId: number, followerId: number): Promise<number>;
    findFollowing(id: number): Promise<Follower[]>;
    findFollower(id: number): Promise<Follower[]>;
}
