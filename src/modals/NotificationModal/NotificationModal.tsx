// import { useNavigate } from 'react-router-dom';
// import { styled } from 'styled-components';
// import { Theme } from '../../styles';

// const typeToTextMap = {
//   agree: "님이 게시물에 '나도 불편해요'를 눌렀습니다",
//   done: "님이 게시물에 '해결됐어요'를 눌렀습니다",
//   comment: '님이 게시물에 댓글을 남겼습니다',
//   postDone: '게시물이 해결 완료 처리됐습니다',
// };

// export const NotificationModal = () => {
//   const navigate = useNavigate();

//   const onClickToPost = (postId) => {
//     navigate(`/detail/${postId}`);
//   };

//   return (
//     <>
//       <StModal>
//         {data?.map((notification, index) => (
//           <StNotificationBox
//             key={index}
//             onClick={() => onClickToPost(notification.postId)}
//           >
//             <StText>
//               {`${notification.actor}${typeToTextMap[notification.type] || ''}`}
//             </StText>
//             <StTime>{notification.createdAt}</StTime>
//           </StNotificationBox>
//         ))}
//       </StModal>
//     </>
//   );
// };

// export const StModal = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 396px;
//   height: 332.9px;
// `;

// export const StNotificationBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 372px;
//   height: 60.18px;
// `;

// export const StText = styled.div`
//   font-size: ${Theme.fontSizes.label1};
//   font-weight: ${Theme.fontWeights.label1};
//   color: ${Theme.colors.black};
// `;

// export const StTime = styled.div`
//   font-size: ${Theme.fontSizes.label2};
//   font-weight: ${Theme.fontWeights.label2};
//   color: ${Theme.colors.gray6};
// `;
