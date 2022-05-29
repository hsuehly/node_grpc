import { resolve } from "path";
import * as protoloder from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import type { ProtoGrpcType } from "../proto/hello";

//设置端口
const PORT = 8080;
//设置文件地址
const PROTO_PATH = resolve(__dirname, "../proto/hello.proto");
//options
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
//加载proto文件
const packageDefinition = protoloder.loadSync(PROTO_PATH, options);
//创建grpc对象
// const grpcobj = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const helloPackage = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).helloPackage;

// 创建客户端
const client = new helloPackage.HelloService(
  `localhost:${PORT}`,
  //不使用ssl
  grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
//                  超时控制
client.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("client ready");
  client.sayHello({ name: "我是node发送的名字" }, (err, response) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("response",response);
  });
});
