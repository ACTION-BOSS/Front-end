  return (
    <StKakaoButton onClick={handleClickKakaoIcon}>
      <StKakaoIconWrapper>
        <KakaoIcon />
      </StKakaoIconWrapper>
      <StText>카카오 로그인</StText>
    </StKakaoButton>
  );
};

export const StKakaoButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 328px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 16px;

  cursor: pointer;
  border-radius: 8px;
  background-color: #fee500;
`;

export const StKakaoIconWrapper = styled.div`
  position: absolute;
  top: 53%;
  left: 16.5px;
  transform: translateY(-50%);
`;

export const StText = styled.p`
  color: ${Theme.colors.black};
  text-align: center;
  font-size: 13px;
  font-weight: 500px;
`;
