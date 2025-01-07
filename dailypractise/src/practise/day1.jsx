// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import NbModal from '../../common/NbModal';
// import ENV_CONFIG from '../../config/constant/index';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import EyeDetection from '../../Components/userKyc/EyeDetection';
// import { getLivelinessRequest, getLivelinessReset } from '../../slices/selfieSlice';
// import { checkIsMobileDevice } from '../../utils/common';
// import { PAGE_ENUM, redirectLink } from '../constant';
// import { checkSteps } from '../../Components/constant';
// import { useNavigate } from 'react-router-dom';
// import { getErrorLogApiRequest } from '../../slices/errorLogApiSlice';

// const E_kycLoader = lazy(() => import('./E_kycLoader'));
// const E_kycSuccess = lazy(() => import('./E_kycSuccess'));
// const E_kycFailure = lazy(() => import('./E_kycFailure'));
// const CameraErrorPage = lazy(() => import('./CameraErrorPage'));

// const E_kycModal = (props) => {
// 	const { ShowTotalEmi, setShowWithdrawalAmount, set_eKyc, setCurrentPage } = props;
// 	console.log(props,"props")
// 	const isMobile = checkIsMobileDevice();
// 	const { baseURL } = ENV_CONFIG.env.clientConstants;
// 	const arrow = `${baseURL}/white-arrow.svg`;
// 	const [ShowTotalEmiText, setShowTotalEmiText] = useState(false);
// 	const [showText, setShowText] = useState(false);
// 	const [eyeBlink, setEyeBlinkCount] = useState(0);
// 	const [imgValue, setImgValue] = useState('');
// 	const [eyeStates, setEyeStates] = useState([]);
// 	const [isCameraPermissionAvailable, setIsCameraPermissionAvailable] = useState(false);
// 	const profile = useSelector((store) => store?.profile?.profileData);
// 	const selfieSlice = useSelector((store) => store.selfieSlice?.selfieLiveliness);
// 	const NextState = useSelector((store) => store.selfieSlice?.headers?.nextstate);
// 	const profileData = useSelector((store) => store?.profile?.profileData);
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const Provider = useSelector((store) => store?.navigation?.navigationInfo?.provider);

// 	const closeModal = () => {
// 		set_eKyc(false);
// 	};
// 	useEffect(() => {
// 		const data = {
// 			liveliness: true,
// 			userImgBase64: imgValue.split(',')[1],
// 		};

// 		if (imgValue && profile?.loanProfileDetail?.id) {
// 			dispatch(getLivelinessRequest({ profileId: profile?.loanProfileDetail?.id, data: data }));
// 		}
// 	}, [imgValue]);

// 	useEffect(() => {
// 		if (selfieSlice?.success) {
// 			dispatch(
// 				getErrorLogApiRequest({
// 					type: 'INFO',
// 					category: `instacash-camera`,
// 					log: `selfie verified for userId ${profileData?.userProfile?.id}`,
// 				})
// 			);
// 			setTimeout(() => {
// 				setCurrentPage(PAGE_ENUM.AADHAAR_EKYC);
// 				navigate(redirectLink(NextState, Provider));
// 				dispatch(getLivelinessReset());
// 			}, 2000);
// 		}
// 	}, [selfieSlice?.success]);
// 	useEffect(() => {
// 		if (selfieSlice?.failed) {
// 			setTimeout(() => {
// 				window.location.reload();
// 			}, 2000);
// 		}
// 	}, [selfieSlice?.failed]);
// 	useEffect(() => {
// 		if (profileData && Provider) {
// 			if (checkSteps(Provider === 'CS' ? 'step1' : 'step2', Provider)?.includes(profileData?.state)) {
// 				return;
// 			} else {
// 				// navigate('/');
// 			}
// 		}
// 	}, [profileData, Provider]);

// 	useEffect(() => {
// 		if (window?.checkCamera) {
// 			window?.checkCamera((e) => setIsCameraPermissionAvailable(e));
// 		}
// 	}, []);
// 	return (
// 		<>
// 			<Suspense>{selfieSlice?.loading && <E_kycLoader isMobile={isMobile} />}</Suspense>
// 			<Suspense>{selfieSlice?.success && <E_kycSuccess isMobile={isMobile} />}</Suspense>
// 			<Suspense>
// 				{selfieSlice?.failed && <E_kycFailure isMobile={isMobile} text={'Image Verification Failed'} />}
// 			</Suspense>
// 			{!isCameraPermissionAvailable && (
// 				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
// 					<div className='loader'></div>
// 				</div>
// 			)}
// 			{isCameraPermissionAvailable === 'denied' && (
// 				<CameraErrorPage setIsCameraPermissionAvailable={setIsCameraPermissionAvailable} />
// 			)}
// 			{!imgValue && !selfieSlice?.success && !selfieSlice?.failed && isCameraPermissionAvailable === 'granted' && (
// 				<EyeDetection
// 					isCameraPermissionAvailable={isCameraPermissionAvailable}
// 					eyeBlink={eyeBlink}
// 					setImgValue={setImgValue}
// 					imgValue={imgValue}
// 					setEyeBlinkCount={setEyeBlinkCount}
// 					setEyeStates={setEyeStates}
// 				/>
// 			)}
// 		</>
// 	);
// };
// const mapStateToProps = (state) => ({
// 	data: state.data,
// 	name: 'ayush',
// });

// // Mapping dispatch to props
// const mapDispatchToProps = (dispatch) => ({
// 	updateData: (data) => dispatch({ type: 'UPDATE_DATA', payload: data }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(E_kycModal);
// // export default E_kycModal;

