import { FollowerService } from './follower.service';
export declare class FollowerController {
    private readonly followerService;
    constructor(followerService: FollowerService);
    follow(id: string, req: Request): Promise<import("./model/follower.model").Follower>;
    unFollow(id: string, req: Request): Promise<number>;
    findFollowers(req: Request): Promise<import("./model/follower.model").Follower[]>;
    findFollowing(req: Request): Promise<import("./model/follower.model").Follower[]>;
}
