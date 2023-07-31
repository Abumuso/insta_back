"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFollowerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_follower_dto_1 = require("./create-follower.dto");
class UpdateFollowerDto extends (0, swagger_1.PartialType)(create_follower_dto_1.CreateFollowerDto) {
}
exports.UpdateFollowerDto = UpdateFollowerDto;
//# sourceMappingURL=update-follower.dto.js.map